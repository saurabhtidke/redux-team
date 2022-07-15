export const coachReducer = (
  state = {
    cricketCoaches: ["Saurabh Ganguly", "Anil Kumble", "Kapil Dev"],
    footballCoaches: ["Micheel Shan", "Ram Kisan", "Sharma Kaladka"],
    kabadiiCoaches: ["Sundar Shan", "Ram Jadhav", "Sharma Rohit"],
  },
  action
) => {
  const { payload } = action;
  const { cricketCoaches, footballCoaches, kabadiiCoaches } = state;
  switch (action.type) {
    case "cricketCoaches":
      return {
        ...state,
        cricketCoaches: [payload, ...cricketCoaches],
      };
      break;
    case "footballCoaches":
      return {
        ...state,
        footballCoaches: [payload, ...footballCoaches],
      };
      break;
    case "kabadiiCoaches":
      return {
        ...state,
        kabadiiCoaches: [payload, ...kabadiiCoaches],
      };
      break;
    default:
      return state;
  }
  return state;
};
