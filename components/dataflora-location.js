import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../config";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import YardIcon from '@mui/icons-material/Yard';

const FLORA = gql`
  query ($slug: String) {
  postsConnection(where: {speciesLocation: {slug: $slug}, tags_contains_some: "Flora"}) {
    aggregate {
      count
    }
  }
  }
`;


const DataCountFlora = ({slug}) => {
const { data, loading, error } = useQuery(FLORA, {
  variables: {
    slug: `${slug}`
  }
});

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
            <Paper sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%', mb:5, mt:5 }}>
                  <YardIcon sx={{ fontSize: 40, color:"#22cc88"}} />
                  <Typography variant="h3" color='#22cc88' textAlign= 'right'>{data.postsConnection.aggregate.count}</Typography>
            </Paper>
  );
}

export default withApollo(DataCountFlora);