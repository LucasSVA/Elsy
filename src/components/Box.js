import React from "react";



class Box extends React.Component {

    render() {

        const water = this.props.icon === "local_drink"
        const walk = this.props.icon === "direction_walk"
        const style = {
            fontSize: 100,
            color: this.props.color,

        }

        return (

            < div className="box col-sm-3 col-6" >

                <span className="material-icons " style={style}>
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {!water && <input type="range" value={this.props.value} min={this.props.min} max={this.props.max} onChange={this.props.onChange} />}
                {this.props.icon === "direction_walk" && <input type="range" step="10000" onChange={this.props.onChange} min={this.props.min} max={this.props.min} value={this.props.value} />}
            </div >


        );
    }
}

export default Box
