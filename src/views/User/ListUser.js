import React from "react";
import axios from "axios";
import './listUser.scss';
class ListUser extends React.Component {

    state = {
        ListUserData: []
    }



    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => { console.log('check>>>', res.data.data) })


        let res = await axios.get('https://reqres.in/api/users?page=2')


        this.setState({
            ListUserData: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('check>>>', this.state.ListUserData)

    }




    render() {
        let listData = this.state.ListUserData
        console.log('listData>>', listData.length)
        return (

            <div>
                <div>Fecth data from Api</div>
                <div className="content-container">

                    {listData && listData.length > 0 && listData.map((val, index) => {

                        return (
                            <div className="child">
                                {index + 1}-{val.first_name} {val.last_name}
                            </div>
                        )


                    })


                    }


                </div>
            </div>
        )
    }
}
export default ListUser