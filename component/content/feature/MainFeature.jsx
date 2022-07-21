import styles from '../../../styles/content/feature.module.scss'
import React , { createContext } from 'react'
import Feature_item from './Feature';

const obj = [
  {
    icon : "ImClipboard",
    title: "Boards",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
  },
  {
    icon : "ImClipboard",
    title: "Tasks",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
  },
  {
    icon : "ImClipboard",
    title: "Members",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
  },
  {
    icon : "ImClipboard",
    title: "Timers",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
  },
  {
    icon : "ImClipboard",
    title: "Follow",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
  },
  {
    icon : "ImClipboard",
    title: "Recetly Accessed",
    lorem: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam inventore tempore distinctio voluptatibus exercitationem optio omnis ipsa facere error, tempora sequi nobis molestias amet voluptates vitae libero qui quidem aspernatur nulla minima quis iste non! Doloremque, impedit omnis ullam fuga commodi perspiciatis neque explicabo officia quod voluptate nisi iusto laboriosam."
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