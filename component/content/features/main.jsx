import styles from '../../../styles/content/feature.module.scss'
import React,{useEffect,useState} from 'react';
import { HiDatabase , HiCode ,HiOutlinePhotograph } from 'react-icons/hi';
const FeatureMain = () => {
return (
        <>
        
            <div className={styles.faq_container}>
                <div className={styles.faq_header}>Performance of App</div>
                <div className={styles.cards}>
                    <div className={styles.cardItem}>
                        <span><HiDatabase /></span>
                        <p>My 3 Databases </p>
                        </div>
                    <div className={styles.cardItem}>
                        <span><HiCode/></span>
                        <p>My 12 Projects</p>
                    </div>
                    <div className={styles.cardItem}>
                        <span><HiOutlinePhotograph/></span>
                        <p>My 120 Blogs</p>
                    </div>
                </div>
                    
            </div>


            <div className={styles.feature_container}>
                <div className={styles.feature_Header}><span>Last new Updated</span></div>

                <div className={styles.feature_Body}>
                    <div className={styles.feature_Body_left}  id="body">
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                    </div>

                    <div className={styles.feature_Body_right}>
                        <span className={styles.title}>Headering content</span>
                        <p className={styles.lorems}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus fuga voluptas eum! Dolorem deleniti tempore perferendis obcaecati quibusdam ratione quam aperiam corrupti tenetur odit suscipit eveniet rem consectetur quasi, quidem dolorum repellendus aliquid assumenda a maxime! Temporibus, necessitatibus dolor distinctio sint quisquam laborum? Soluta minus tenetur deserunt autem fugiat, dignissimos obcaecati consequuntur fugit itaque debitis. Aperiam soluta officia suscipit eveniet iste a officiis cumque quas, vel enim repellat dolorum, provident veritatis nihil reprehenderit et iusto excepturi sit? Deleniti cumque facere quidem dolor, quae voluptates dolore voluptate consequatur totam provident porro ab molestiae et sed necessitatibus cupiditate alias, fugit nostrum.</p>
                    </div>

                </div>

                <div className={styles.feature_Body}>
                    <div className={styles.feature_Body_left}>
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                    </div>

                    <div className={styles.feature_Body_right}>
                        <span className={styles.title}>Headering content</span>
                        <p className={styles.lorems}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus fuga voluptas eum! Dolorem deleniti tempore perferendis obcaecati quibusdam ratione quam aperiam corrupti tenetur odit suscipit eveniet rem consectetur quasi, quidem dolorum repellendus aliquid assumenda a maxime! Temporibus, necessitatibus dolor distinctio sint quisquam laborum? Soluta minus tenetur deserunt autem fugiat, dignissimos obcaecati consequuntur fugit itaque debitis. Aperiam soluta officia suscipit eveniet iste a officiis cumque quas, vel enim repellat dolorum, provident veritatis nihil reprehenderit et iusto excepturi sit? Deleniti cumque facere quidem dolor, quae voluptates dolore voluptate consequatur totam provident porro ab molestiae et sed necessitatibus cupiditate alias, fugit nostrum.</p>
                    </div>

                </div>

                <div className={styles.feature_Body}>
                    <div className={styles.feature_Body_left}>
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                            <div className={styles.child_bg}>
                                <div className={styles.child_head}>
                                </div>
                            </div>
                    </div>

                    <div className={styles.feature_Body_right}>
                        <span className={styles.title}>Headering content</span>
                        <p className={styles.lorems}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit delectus fuga voluptas eum! Dolorem deleniti tempore perferendis obcaecati quibusdam ratione quam aperiam corrupti tenetur odit suscipit eveniet rem consectetur quasi, quidem dolorum repellendus aliquid assumenda a maxime! Temporibus, necessitatibus dolor distinctio sint quisquam laborum? Soluta minus tenetur deserunt autem fugiat, dignissimos obcaecati consequuntur fugit itaque debitis. Aperiam soluta officia suscipit eveniet iste a officiis cumque quas, vel enim repellat dolorum, provident veritatis nihil reprehenderit et iusto excepturi sit? Deleniti cumque facere quidem dolor, quae voluptates dolore voluptate consequatur totam provident porro ab molestiae et sed necessitatibus cupiditate alias, fugit nostrum.</p>
                    </div>

                </div>
                
            </div>
        
        </>
    )

}


export default FeatureMain;