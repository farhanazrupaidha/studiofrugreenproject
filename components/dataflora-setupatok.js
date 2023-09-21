import React, { Component, useRouter } from 'react';
import { useLazyQuery, useQuery, gql } from '@apollo/client';
import withApollo from "../config";

import CountUp from 'react-countup';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import YardIcon from '@mui/icons-material/Yard';

const FLORA = gql`
  query {
  postsConnection(where: {_search: "Setu Patok", tags_contains_some: "Flora"}) {
    aggregate {
      count
    }
  }
  }
`;


const DataCountFlora = ({postsConnection}) => {
const { data, loading, error } = useQuery(FLORA);

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
            <Paper sx={{ borderRadius: 5, p:2, maxWidth:200, width:'100%' }}>
                  <YardIcon sx={{ fontSize: 40, color:"#20C1FE"}} />
                  <Typography variant="h3" textAlign= 'right'><CountUp end={data.postsConnection.aggregate.count} /></Typography>
            </Paper>
  );
}

export default withApollo(DataCountFlora);