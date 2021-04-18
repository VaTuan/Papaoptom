import styled from "styled-components";
import Slider from "@material-ui/core/Slider";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles({
  slider: {
    marginTop: "16px",
    width: "90%",
    marginBottom: "16px",
  },
});

function FilterSliderRange() {
  const classes = useStyles();
  const [number01, setNumber01] = useState(0);
  const [number02, setNumber02] = useState(100);
  const [value, setValue] = useState([number01, number02]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setNumber01(newValue[0]);
    setNumber02(newValue[1]);
  };

  function valuetext(value) {
    return value;
  }

  const handleNumber01Change = (e) => {
    let newValue = e.target.value;
    setNumber01(newValue);

    if (typeof parseInt(newValue) === "number") {
      setValue(() => {
        if (newValue === value[0]) {
          return [...value];
        } else {
          return [newValue, number02];
        }
      });
    } else {
      return [...value];
    }
  };

  const handleNumber02Change = (e) => {
    let newValue = e.target.value;
    setNumber02(newValue);

    if (typeof parseInt(newValue) === "number") {
      setValue(() => {
        if (newValue === value[1]) {
          return [...value];
        } else {
          return [number01, newValue];
        }
      });
    } else {
      return [...value];
    }
  };

  return (
    <Wrapper>
      <Slider
        className={classes.slider}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
      />

      <NumberSlider>
        <span>від</span>
        <input
          type="text"
          value={number01}
          //   onChange={(e) => setNumber01(e.target.value)}
          onChange={handleNumber01Change}
        />
        <span>до</span>
        <input
          type="text"
          value={number02}
          //   onChange={(e) => setNumber02(e.target.value)}
          onChange={handleNumber02Change}
        />
      </NumberSlider>
    </Wrapper>
  );
}

export default FilterSliderRange;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // 2 thanh ngang nằm song song
  .MuiSlider-track {
    height: 9px;
    background-color: #265eed;
  }
  span.MuiSlider-rail {
    height: 9px;
    background-color: #c5c5c5;
  }

  // 2 thanh dọc 2 bên
  .MuiSlider-thumb {
    background-color: #265eed !important;
    width: 1px;
    height: 17px;
    margin-left: unset;
  }

  .MuiSlider-valueLabel {
    left: unset;
  }
  .PrivateValueLabel-offset-4 {
    top: -8px;
    font-size: 10px;

    // thằng hiển thị xem chọn bao nhiêu
    .PrivateValueLabel-circle-5 {
      width: 30px;
      height: 15px;
      background-color: #265eed !important;
      display: unset;
      transform: unset;
      border-radius: unset;

      .PrivateValueLabel-label-6 {
        padding: 0px 2px;
        font-size: 11px;
      }
    }
  }
`;

const NumberSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  input {
    flex: 1 1 auto;
    padding: 5px 3px;
    max-width: 68px;
    font-size: 14px;
    color: #474747;
    text-align: center;
    border: 1px solid #d5d5d5;
    outline: none;
  }
`;
