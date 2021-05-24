import React from "react";
import {ProjectCard} from "../ProjectCard/ProjectCard";
import "./ProjectList.scss";
import {ISelectOption, Select} from "../../Common/Select/Select";
import {MultiSelect} from "../../Common/Select/MultiSelect";

export const ProjectList = () => {
  const options: ISelectOption[] = [
    {
      value: 'C#',
      label: 'C#'
    },
    {
      value: 'React',
      label: 'React'
    },
    {
      value: 'Vue',
      label: 'Vue'
    }
  ];
  const sortOptions: ISelectOption[] = [
    {
      value: 'date',
      label: 'Дата создания'
    },
    {
      value: 'taskCount',
      label: 'Количество задач'
    },
    {
      value: 'activity',
      label: 'Последняя активность'
    }
  ];
  return (
    <div className='project-list'>
      <div className='project-list-actions'>
        <MultiSelect options={options} label='Тэг' width={220}/>
        <Select options={sortOptions} label='Сортировать по' width={250}/>
      </div>
      <div className='project-list-container'>
        <ProjectCard chips={['React', 'C#']} lastActivityDay={3} name='Тестовый проект'/>
        <ProjectCard chips={['C#', 'Vue']} lastActivityDay={15} name='Prosman'/>
      </div>
    </div>
  )
};