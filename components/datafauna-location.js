import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../lib/config";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import PetsIcon from '@mui/icons-material/Pets';

const FAUNA = gql`
  query ($slug: String) {
  postsConnection(where: {speciesLocation: {slug: $slug}, tags_contains_some: "Fauna"}) {
    aggregate {
      count
    }
  }
  }
`;


const DataCountFauna = ({slug}) => {
const { data, loading, error } = useQuery(FAUNA, {
  variables: {
    slug: `${slug}`
  }
});

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
            <Paper sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%', mb:5, mt:5 }}>
                  <PetsIcon sx={{ fontSize: 40, color:"#22cc88"}} />
                  <Typography variant="h3" color='#22cc88' textAlign= 'right'>{data.postsConnection.aggregate.count}</Typography>
            </Paper>
  );
}

export default withApollo(DataCountFauna);