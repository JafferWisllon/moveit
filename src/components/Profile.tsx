import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengeContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/jafferwisllon.png" alt="Jaffer Wisllon" />
      <div>
        <strong>Jaffer Wisllon</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}