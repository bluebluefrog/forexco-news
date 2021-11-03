import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {List} from 'antd';


class PageList extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return(
            <List
                style={{ background: '#fff' }}
                bordered
                dataSource={this.state.data}
                renderItem={item => (
                    <List.Item>
                        {/* <div onClick={()=>{
                            window.location.href= item.guid.rendered
                        }}
                        on
                        >
                            {item.title.rendered}
                        </div> */}
                        <Link to={`/detail/id=${item.id}`}>
                            {item.title.rendered}
                        </Link>
                    </List.Item>
                )}
            />
        )
    }

    componentDidMount() {
        let url = 'https://hammer.forexco.com.au/wp-json/wp/v2/posts?_embed';
        console.log(url);
        axios.get(url)
            .then(res => {
                console.log(res);
                this.setState({
                    data: res.data
                })
                console.log(this.state.data);
            })
    }

}

export default PageList;