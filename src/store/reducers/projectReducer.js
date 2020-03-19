const initState = {
  projects: [
    {
      id: '1',
      title: 'Go eat',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      id: '2',
      title: 'Go sleep',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    },
    {
      id: '3',
      title: 'Go bath',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing'
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('created project err', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
