import React from 'react';
import './style.css';

// import React components
import Container from '../../components/Container';

import Card from '../../components/Card';


    render() {
        return (
            <div>
                <Container>

                        />
                    </Card>
                    <Card heading='Add a TaskList'>
                        <table>
                            <TaskItem
                                taskIncludeYN='false'
                                taskName='Just a task name'
                                weeklyTarget='7'
                                totalTarget='21'
                            />                            
                        </table>
                    </Card>
                </Container>

            </div>
        );
    }
}

export default Test;