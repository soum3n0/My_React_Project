import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo :{
                name:"ddlf",
                bio:"engi",
            }
        };
        
    };

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/soum3n0");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render(){
        const {name,bio} = this.state.userInfo;
        return(
            <div className ="user-info">
            <h2> Name : {name}</h2>
            <h3>Bio:{bio}</h3>
            <h4>Contect: </h4>
        </div>    
        );
    };
};

export default UserClass;