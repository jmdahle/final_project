import React from 'react';
import './style.css'

class Visualizer extends React.Component {
    state = {
        dataList: []
    }

    componentDidMount = () => {
        this.setState({
            dataList: [
                {
                    user_id: 0,
                    goals: [
                        {
                            goal_id: 0,
                            goal_name: 'Goal A',
                            tasks: [
                                {
                                    task_id: 0,
                                    task_name: 'Task 1',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 1,
                                    task_name: 'Task 2',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 2,
                                    task_name: 'Task 3',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 3,
                                    task_name: 'Task 4',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                }
                            ]
                        },
                        {
                            goal_id: 1,
                            goal_name: 'Goal B',
                            tasks: [
                                {
                                    task_id: 0,
                                    task_name: 'Task 1',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 1,
                                    task_name: 'Task 2',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 2,
                                    task_name: 'Task 3',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                },{
                                    task_id: 3,
                                    task_name: 'Task 4',
                                    dates: [
                                        {
                                            date: '8/31/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/1/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/2/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/3/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/4/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/5/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/6/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/7/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/8/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/9/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/10/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/11/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/12/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/13/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/14/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/15/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/16/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/17/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/18/2019',
                                            task_completedYN: false    
                                        }, {
                                            date: '9/19/2019',
                                            task_completedYN: false    
                                        }
                                    ]                                    
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }

    render() {
        return (
            <div>
                Starting date: {this.props.startdate}
                Number of dates: {this.props.numdays}
                <table>
                    <thead>
                        <tr>
                            <td>BLANK</td>
                            <td>&lt;</td>
                            <td>DATEPICKERx10</td>
                            {this.state.dataList.map( item => (
                                <td>{item.date}</td> 
                            ))}

                            <td>&gt;</td>
                            <td>CURR</td>
                            <td>LONG</td>
                            <td>TOTAL</td>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>

            </div>
        );
    }
}

export default Visualizer;