import React from "react";
import ReactTooltip from "react-tooltip";

function ResidualVotesTooltip({ verticalOffset }) {
  const getResidualVotesInfo = () => {
    return "<p>Any method for seat allocation splits a party's votes into represented ones and non-negative residual ones.</p><p>Residual votes can thereby be understood as the votes that would otherwise lead to representation in a 100% <br/>proportionally representative scenario.</p><p>For example, a party that had some amount of votes but didn't manage to get any seat, has all its votes as residual.</p><p> Conversly, if a party gets all the seats in a state, it has 0% residual votes, but it's probably over-represented.</p><p>To learn more about the math behind this metric see <a href='https://en.wikipedia.org/wiki/D%27Hondt_method#Approximate_proportionality_under_D'Hondt' target='_blank' rel='noreferrer'>here </a> or see the <a href='https://www.tandfonline.com/doi/full/10.1080/2474736X.2019.1625712' target='_blank' rel='noreferrer'> original paper</a> .</p>";
  };

  return (
    <span className="tooltip_icon">
      <svg
        width="18"
        height="18"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        data-tip={getResidualVotesInfo()}
        data-html={true}
        data-effect="solid"
        data-arrow-color="#0b1015FF"
        data-event="click"
        cursor="pointer"
        style={{
          verticalAlign: `-${verticalOffset}px`,
        }}
      >
        <circle
          cx="31.0945"
          cy="30.9688"
          r="28.6306"
          stroke="black"
          stroke-width="3"
        />
        <path d="M30.8785 22.9048C30.1585 22.9048 29.5585 22.6648 29.0785 22.1848C28.5985 21.7048 28.3585 21.1288 28.3585 20.4568C28.3585 19.7608 28.5985 19.1848 29.0785 18.7288C29.5585 18.2488 30.1585 18.0088 30.8785 18.0088C31.5745 18.0088 32.1625 18.2488 32.6425 18.7288C33.1465 19.1848 33.3985 19.7608 33.3985 20.4568C33.3985 21.1288 33.1465 21.7048 32.6425 22.1848C32.1625 22.6648 31.5745 22.9048 30.8785 22.9048ZM23.8945 43.9288V41.3368H29.5825V29.5648C29.5825 28.9648 29.2825 28.6648 28.6825 28.6648H24.5065V26.0728H29.4025C31.5385 26.0728 32.6065 27.1408 32.6065 29.2768V41.3368H38.2945V43.9288H23.8945Z" />
      </svg>
      <ReactTooltip clickable={true} event="click" />
    </span>
  );
}

export default ResidualVotesTooltip;
