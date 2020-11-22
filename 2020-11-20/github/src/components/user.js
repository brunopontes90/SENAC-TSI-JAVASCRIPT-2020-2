import React from 'react';

export default class GitHubUser extends React.Component{
    state = {
        loading : true,
        user : null,
    };

    async componentDidMount(){
        const url = 'https://api.github.com/users/thyagoquintas'
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ user : data, loading : false });
    }

    render(){
        if(this.state.loading)
            return(<h2>Carregando...</h2>);
        else   
            return(
                <div>
                    <h2>{this.state.user.name}</h2>
                    <img src={this.state.user.avatar_url} />
                </div>
            );
    }
}