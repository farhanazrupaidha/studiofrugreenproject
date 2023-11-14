import React, { Component, useRouter } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import withApollo from "../config";

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
                  <PetsIcon sx={{ fontSize: 40, color:"#BFCC03"}} />
                  <Typography variant="h3" color='#BFCC03' textAlign= 'right'>{data.postsConnection.aggregate.count}</Typography>
            </Paper>
  );
}

export default withApollo(DataCountFauna);