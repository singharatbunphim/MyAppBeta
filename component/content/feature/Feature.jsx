import styles from '../../../styles/content/feature.module.scss'
import { FeatureData } from './MainFeature';
import React , {useRef} from 'react';
import AddIcon from './addIcon';

const Feature_item = () => {


    return (
        <>
            <FeatureData.Consumer>
                { values => values.map((value,index)=>{
                    return (
                        <div key={index} className={styles.feature_cards_item} >
                        <div className={styles.feature_cards_item_icon}>
                        </div>
                        <div className={styles.feature_cards_item_content}>

                                <div className={styles.feature_card_item_title}>
                                    {value.title}
                                </div>

                                

                                <div className={styles.feature_card_item_lorem}>
                                    {value.lorem}
                                </div>

                        </div>
                    </div>
                    )
                })}
            </FeatureData.Consumer>
        
        </>
    );


}

export default Feature_item;
