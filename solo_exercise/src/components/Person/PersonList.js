import styles from './PersonList.module.css'
import Card from '../UI/Card';

function PersonList(props){    
    return (
        <Card className={styles.person}>
          <ul>
            {props.items.map((person) => (
              <li key={person.id}>
                {person.name} is {person.age} years old
              </li>
            ))}
          </ul>
        </Card>
      );
}

export default PersonList;