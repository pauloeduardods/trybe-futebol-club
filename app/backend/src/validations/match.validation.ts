import * as Joi from 'joi';

const homeTeam = Joi.number().required();
const awayTeam = Joi.number().required();
const homeTeamGoals = Joi.number().required();
const awayTeamGoals = Joi.number().required();
const inProgress = Joi.boolean().default(true);

const matchSchema = Joi.object().keys({
  homeTeam,
  awayTeam,
  homeTeamGoals,
  awayTeamGoals,
  inProgress,
});

export default matchSchema;
