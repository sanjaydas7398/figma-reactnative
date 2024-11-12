

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContestHeader from "../components/ContestHeader";
import PrizeInfo from './PrizeInfo';
import StatsBar from './StatsBar';
import Progress from './Progress';
import Tagline from './Tagline';

interface ContestCardProps {
    taglineText?: string
}

const ContestCard = ({ taglineText = "Biggest prizes guaranteed / IPL tagline" }:ContestCardProps) => {
  return (
    <View style={styles.card}>
          <ContestHeader />
          <PrizeInfo />
          <StatsBar />
          <Progress />
          <Tagline text="Biggest prizes guaranteed / IPL tagline" />
    </View>
  )
}

export default ContestCard

const styles = StyleSheet.create({
    card: {
        marginTop:80,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        margin: 10,
      } 
})