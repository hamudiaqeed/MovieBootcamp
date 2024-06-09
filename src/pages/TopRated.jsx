import React, { useEffect, useContext } from 'react'
import Contextpage from '../Contextpage';
import Table from '../components/Table';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

function TopRated() {

    const { loader, fetchTopRated, topRated } = useContext(Contextpage);

    useEffect(() => {
        fetchTopRated();
    }, [])


    return (
        <>
            <Helmet>
                <title>BlueBird Movies | Top Rated</title>
            </Helmet>

            <div className='w-full md:p-10 mb-20 md:mb-0'>
                <Header />
                <motion.div
                    layout
                    className="flex flex-wrap relative justify-evenly md:justify-around">
                    <AnimatePresence>
                        {
                            loader ? <span className="loader m-10"></span> : <Table topRated={topRated} />
                        }
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    )
}

export default TopRated;