const Shimmer = () => {
    return (
        <div className="res-container">
            {Array(10)
                .fill(null)
                .map((_, index) => (
                    <div className="res-card" id="shimmer-card" key={index}>
                        <div className="shimmer-img"></div>
                        <div className="res-about shimmer-margin">
                            <h3 className="shimmer shimmer-center"></h3>
                            <h4 className="shimmer"></h4>
                            <div className="res-details flex">
                                <h4 className="shimmer"></h4>
                                <h4 className="shimmer"></h4>
                            </div>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Shimmer;
