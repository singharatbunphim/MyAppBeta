import styles from '../../../styles/content/feature.module.scss'
import React , { createContext } from 'react'
import Feature_item from './Feature';
import {ImClipboard} from 'react-icons/im'

const obj = [
  {
    icon : "ImClipboard",
    title: "Earn Certificate Covid-19",
    lorem: "This is a services a earn to certificate for covid-19",
    bg: "red",
  },
  {
    icon : "API DATA",
    title: "API DATA",
    lorem: "This is api data anyone use free",
  }
  ,
  {
    icon : "F2A",
    title: "F2A",
    lorem: "This is F2A data anyone use free",
  }
  
]

export const FeatureData = createContext(obj);


const MainFeature = () => {
  return(
      <div className={styles.feature_wrapper}>
          <div className={styles.header}>Features</div>
          <div className={styles.feature_cards}>
            <FeatureData.Provider value={obj}>
                <Feature_item />
            </FeatureData.Provider>
          </div>
      </div>
  )
}


export default MainFeature;