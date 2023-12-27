

const Stats = () => {
    return (
        <div>
            <div className="stats shadow flex flex-col md:flex-row">

                <div className="stat place-items-center">
                    <div className="stat-title">Total Tasks</div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc">From January 1st to February 1st</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Ongoing</div>
                    <div className="stat-value text-secondary">0</div>
                    <div className="stat-desc text-secondary"></div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">Completed</div>
                    <div className="stat-value">0</div>
                    <div className="stat-desc"></div>
                </div>

            </div>
        </div>
    );
};

export default Stats;