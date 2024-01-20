import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export let slide=trigger('slide',[
  transition(':enter',[
    style({transform: 'translateX(-10px)'}),
    animate(500)
  ])
])

export let fade= trigger('fade',[
    transition("void=> *",[
      style({opacity:0.3}),
      animate(3000)
    ])
])


export let expanded=trigger('expandCollapse',[
  state('collapsed',style({
    height:0,
    paddingTop:0,
    overflow:'hidden'
  })),
  state('expanded',style({
    height:'*',
    paddingTop:'*',
    overflow:'auto'
  })),
  transition('collapsed => expanded',[
    animate('300ms ease-out')
  ]),
  transition('expanded => collapsed',[
    animate('300ms ease-in')
  ])
])

// export let expanded=trigger('expandCollapse',[
//   state('collapsed',style({
//     height:0,
//     paddingTop:0,
//     paddingBottom:0,
//     opacity:0
//   })),
//   transition('collapsed => expanded',[
//     animate('300ms ease-out', style({
//       height:0,
//       paddingTop:0,
//       paddingBottom:0
//     })),
//     animate('1s',style({opacity:1}))
//   ]),
//   transition('expanded => collapsed',[
//     animate('300ms ease-in')
//   ])
// ])
