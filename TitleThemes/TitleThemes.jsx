import {Component} from "react";
import "./TitleThemes.scss";

class TitleTheme1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="title_theme1_container">{this.props.label}</div>
    )
  }
}

export{
  TitleTheme1
}