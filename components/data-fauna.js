import React from 'react';
import { useQuery, gql } from '@apollo/client';
import withApollo from "../lib/config";

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import PetsIcon from '@mui/icons-material/Pets';

const FAUNA = gql`
  query {
  postsConnection(where: {_search: "Fauna"}) {
    aggregate {
      count
    }
  }
  }
`;


const DataCountFauna = ({postsConnection}) => {
const { data, loading, error } = useQuery(FAUNA);

  if (loading) return null;
  if (error) return `Error! ${error}`;


  return (
            <Paper sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%' }}>
                  <PetsIcon sx={{ fontSize: 40, color:"#22cc88"}} />
                  <Typography variant="h3" color='#22cc88' textAlign= 'right'>{data.postsConnection.aggregate.count}</Typography>
            </Paper>
  );
}

export default withApollo(DataCountFauna);