import { PureComponent } from "react";
import { Breadcrumbs as SourceBreadcrumbs } from "SourceComponent/Breadcrumbs/Breadcrumbs.component";
import "./Breadcrumbs.style";

export class Breadcrumbs extends SourceBreadcrumbs {
  constructor(props) {
    super(props);
    this.state = { checkoutStep: this.props.checkoutStep };
  }
  componentDidMount(){
    this.setState({checkoutStep: this.props.checkoutStep})
  }
  componentDidUpdate(){
    this.setState({checkoutStep: this.props.checkoutStep})
    
}


  render() {
    switch (this.state.checkoutStep) {
      case "SHIPPING_STEP": {
        return (
          <div className="ProgressContainer">
            <div className="line-active"></div>
            <div className="circle-active">
              <p className="step-number">1</p>
              <p className="step-subtitle-active">Shipping</p>
            </div>
            <div className="line-passive"></div>
            <div className="circle-passive">
              <p className="step-number">2</p>
              <p className="step-subtitle-passive">Review & Payments</p>
            </div>
            <div className="line-passive"></div>
          </div>
        );
      }
      case "BILLING_STEP": {
        return (
          <div className="ProgressContainer">
            <div className="line-active"></div>
            <div className="circle-active">
              <p className="step-number">&#10003;</p>
              <p className="step-subtitle-active">Shipping</p>
            </div>
            <div className="line-active"></div>
            <div className="circle-active">
              <p className="step-number">2</p>
              <p className="step-subtitle-active">Review & Payments</p>
            </div>
            <div className="line-passive"></div>
          </div>
        );
      }
      case "DETAILS_STEP": {
        return (
          <div className="ProgressContainer">
            <div className="line-active"></div>
            <div className="circle-active">
              <p className="step-number">&#10003;</p>
              <p className="step-subtitle-active">Shipping</p>
            </div>
            <div className="line-active"></div>
            <div className="circle-active">
              <p className="step-number">&#10003;</p>
              <p className="step-subtitle-active">Review & Payments</p>
            </div>
            <div className="line-active"></div>
          </div>
        );
      }
      default:
        return null;
    }
  }
}

export default Breadcrumbs;
