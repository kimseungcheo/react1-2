// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {isToggleOn: true};

//         // callback에서 this를 사용하기 위해서는 바인딩을 필수적으로 해줘야 합니다.
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//         this.setState(prevState => ({
//             tsToggleOn: !prevState.isToggleOn
//         }));
//     }


//     render() {
//         return (
//             <button onClick={this.handleClick}>
//                 {this.state.isToggleOn ?'켜짐' : '꺼짐'}
//             </button>
//         );
//     }
// }
