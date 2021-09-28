import PropTypes from "prop-types";
import randomColor from "../../helper/randomColor";
import s from "./Statistics.module.css";
// console.log(s);

function Statistics({ title, stats }) {
  //   console.log(stats);

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          //   console.log(percentage);
          return (
            <li
              className={s.item}
              style={{ backgroundColor: randomColor() }}
              key={id}
            >
              <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};

export default Statistics;
