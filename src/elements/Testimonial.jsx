import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import BridalTeam from '../content/bridalTeam.json'

const Testimonial = () => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-lg-12">
                    <Tabs>
                        {BridalTeam.map(({ bio, name, role }, idx) => (
                            <TabPanel key={`bio-${idx}`}>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>{bio}</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>{name} </span> - {role}</h6>
                                    </div>
                                </div>
                            </TabPanel>))}

                        <TabList className="testimonial-thumb-wrapper">
                            {BridalTeam.map(({ img }, idx) => (
                                <Tab key={`img-${idx}`}>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src={img} alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                            ))}
                        </TabList>
                    </Tabs>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Testimonial;