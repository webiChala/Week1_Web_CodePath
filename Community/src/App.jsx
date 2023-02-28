import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Card from './Card'
import Neetcode from '/neetcode.jpg'
import Geeks from '/geeksforgeeks.png'
import Algo from '/algoexpert.png'
import Udemy from '/udemy.png'
import Coder from '/Coder.png'
import Interview from '/Interview.png'
import Leetcode from '/Leetcode.jpg'
import Educative from '/Educative.png'
import HackerRank from '/Hackerrank.png'
import CodePath from '/Codepath.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="Apps">
      <h1>Interview Prep Recommended Courses</h1>
      <div className="Cards">
        <Card image={CodePath} title='CodePath' content = 'Tech Excellence for All Computer Science Students' url='https://codepath.org/'/> 

        <Card image={Neetcode} title='Neetcode' content = 'A better way to prepare for coding interviews.' url = 'https://neetcode.io/'/>
        <Card image={Geeks} title='GeeksForGeeks' content = 'A computer science portal for geeks' url='https://www.geeksforgeeks.org/'/>        
        <Card image={Algo} title='AlgoExpert' content = 'The ultimate resource to prepare for coding interviews.' url = 'https://algoexpert.io/'/>
        <Card image={Udemy} title='Udemy' content = 'New to Udemy? Lucky you.' url='https://udemy.com/'/>  
        <Card image={Coder} title='Coderbyte' content = 'Improve your coding skills.' url = 'https://coderbyte.com/'/>
        <Card image={Interview} title='Interview Cake' content = 'I will teach you to be good at programming interviews' url='https://interviewcake.com/'/>  
        <Card image={Leetcode} title='Leetcode' content = 'The world leading programming website.' url = 'https://leetcode.com/'/>
        <Card image={HackerRank} title='HackerRank' content = 'Interview preparation kit' url='https://hackerrank.com/'/>  
        <Card image={Educative} title='Educative' content = 'Level up your coding skills' url = 'https://educative.io/'/>
      </div>
      
    </div>
  );
}

export default App;
