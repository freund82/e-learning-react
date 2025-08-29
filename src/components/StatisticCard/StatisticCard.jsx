import "./statisticCard.css";

const StatisticCard = ({ statistic }) => {
    return (
        <div className="statistic-card__block">
              {
                statistic.map((item) => (
                    <div key={item.id} className="statistic-card">
                        <div className="statistic-card__inner">
                            <h2 className="statistic-card__title">{item.number>=1000 ? `${item.number/1000}K+` : item.number}</h2>
                            <div className="statistic-card__value">{item.title}</div>
                        </div>
                </div>))
            }
        </div>
    );
};

export default StatisticCard;