import React from "react";

export const  WithLazyComponent = (Component) => {
    return class extends React.Component {
        render() {
            return (
                <React.Suspense fallback={<p>Loading...</p>}>
                    <Component {...this.props}/>
                </React.Suspense>
            )
        }
    }
}
