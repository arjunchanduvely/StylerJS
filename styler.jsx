import "./styler_component.scss";
import {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

class CreateButton1 extends Component{
  render(){
    return(
    <div className="create_button1" {...this.props.attrs}>
      <i className="fas fa-plus"></i>
    </div>
    )
  }
}

class ShowMore1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="show_more_theme1">
        <FontAwesomeIcon className="show_more_angle_down_theme1" icon={faAngleDown} />
        <div className="show_more_title_theme1">Show more</div>
      </div>
    )
  }
}
class Loading1 extends Component {

  render(){
    return (
      <div className="loading_theme1">
        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
        width="30px" height="30px" viewBox="0 0 50 50" style={{enableBackground:'new 0 0 50 50'}}>
          <path fill="red" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
            {/*<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.5s" repeatCount="indefinite"/>*/}
          </path>
        </svg>
      </div>
    )}
}
class Loading2 extends Component {

  render(){
    return (
      <div className="loading_theme2" style={{...this.props.style}}>
        {/*?xml version="1.0" encoding="utf-8"?*/}
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: 'auto', background: 'rgba(0, 0, 0, 0) none repeat scroll 0% 0%', display: 'block', shapeRendering: 'auto'}} width="54px" height="54px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <circle cx={84} cy={50} r={10} fill="#cfcfcf">
            <animate attributeName="r" repeatCount="indefinite" dur="0.25s" calcMode="spline" keyTimes="0;1" values="10;0" keySplines="0 0.5 0.5 1" begin="0s" />
            <animate attributeName="fill" repeatCount="indefinite" dur="1s" calcMode="discrete" keyTimes="0;0.25;0.5;0.75;1" values="#cfcfcf;#cfcfcf;#cfcfcf;#cfcfcf;#cfcfcf" begin="0s" />
          </circle><circle cx={16} cy={50} r={10} fill="#cfcfcf">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s" />
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="0s" />
          </circle><circle cx={50} cy={50} r={10} fill="#cfcfcf">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s" />
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.25s" />
          </circle><circle cx={84} cy={50} r={10} fill="#cfcfcf">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s" />
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.5s" />
          </circle><circle cx={16} cy={50} r={10} fill="#cfcfcf">
            <animate attributeName="r" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="0;0;10;10;10" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s" />
            <animate attributeName="cx" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.25;0.5;0.75;1" values="16;16;16;50;84" keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.75s" />
          </circle>
        </svg>
      </div>
    )}
}

export{
  CreateButton1,
  ShowMore1,
  Loading1,
  Loading2
};