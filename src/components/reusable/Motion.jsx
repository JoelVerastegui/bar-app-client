import React, { Suspense } from 'react';
import lazy from 'react-lazy-named';

const Motion = (props) => { 
    const childrenElement = React.Children.only(props.children);
    const motionProps = {...props, children: null};
    const MotionComponent = lazy(() => import('framer-motion'), `motion.${childrenElement.type}`);

    return(
        <Suspense fallback={props.children}>
            <MotionComponent {...motionProps} {...childrenElement.props} />
        </Suspense>
    )
}

export default Motion;