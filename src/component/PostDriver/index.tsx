
import { Star,Phone, ShieldPlus } from 'phosphor-react';

import VehicleImg from '../../assets/vehicle.png';

import styles from './PostDriver.module.css';
import { Comment } from '../Comment';

export function PostDriver(){
  return(
    <div className={styles.container}>
      <div className={styles.locationContainer}>
        <h1>Encontre <span>Fábio</span> no local de partida</h1>
        <p>Chega em 3 minutos (800 metros)</p>
      </div>

      <div className={styles.vehicleContainer}>
        <div className={styles.driverContainer}>
          <div className={styles.driverInfo}>
            <img src="https://github.com/fabioabrantes.png" alt="" />

            <div className={styles.rating}>
              <Star size={20} color="#fff" weight="fill"/>
              <span>5.0</span>
            </div>

            <p>Fábio A. D.</p>
          </div>

          <div className={styles.vehicleImg}>
            <img src={VehicleImg} alt="" />
          </div>
        </div>     

        <div className={styles.plate}>
          <h1>BCD0D19</h1>
          <p>Honda Civic Roxo</p>
        </div>
      </div>

      <form className={styles.formMessage}>
        <input
          placeholder='Enviar uma mensagem para Fábio...'
          required
        />

        <button type="submit">Publicar</button>
        <div className={styles.iconsContainerMsg}>
          <Phone size={64} color="#00875F" weight="fill" />
          <ShieldPlus size={64} color="#00875F" weight="fill" />
        </div>
      </form>

      <div>
        <Comment content='Fabio estou no local já lhe esperando. estou com camisa azul e calça jeans'/>
        <Comment content='Fabio estou no local já lhe esperando. estou com camisa azul e calça jeans'/>
        <Comment content='Fabio estou no local já lhe esperando. estou com camisa azul e calça jeans'/>
      </div>
   </div>
  )
}