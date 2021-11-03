import React, {Component} from 'react';
import axios from 'axios';
import { Card } from 'antd';
import './index.css';

class AppDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'loading...',
            content: 'loading...'
        }
    }

    render() {
        return (
            <Card title={this.state.title}>
                <div className='detail' dangerouslySetInnerHTML={{ __html: this.state.content}}></div>
            </Card>
        )
    }

    componentDidMount() { 
        const id = this.props.match.params.id;
        // console.log(id);
        let url = 'https://hammer.forexco.com.au/wp-json/wp/v2/posts?_embed';
        axios.get(url)
            .then(res => {
                res.data.forEach(item => {
                    console.log(item);
                    if (item.id==id){
                        // console.log(item.id);
                        // console.log(id);
                        this.setState({
                            title: item.title.rendered,
                            content: item.content.rendered
                        })
                    }
                });
            })
    }
}


export default AppDetail;