import React from "react";
import {Icon} from "../../Common/Icon/Icon";
import "./ProjectCards.scss";
import {Chip} from "../../Common/Chip/Chip";

export interface IProjectCard {
  name: string;
  chips: string[]; // TODO make standalone model
  lastActivityDay: number;
}

export const ProjectCard = (props: IProjectCard) => {
  const {name, chips, lastActivityDay} = props;
  return (
    <div className='project-card'>
      <p className='project-card__header'>
        {name}
      </p>
      <div className='project-card__main'>
        {
          chips.map(chip => <Chip text={chip}/>)
        }
      </div>
      <div className='project-card__footer'>
        <div className='project-activity'>
          <span>{lastActivityDay} дня(-ей) назад</span>
        </div>
        <div className='project-actions'>
          <Icon name='three_dots' alt='more'/>
        </div>
      </div>
    </div>
  )
};