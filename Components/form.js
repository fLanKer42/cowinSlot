const stateDate = require('../states.json');

class formClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            districtData : 0,
            state : '',
            district : '',
        };
    };
    componentDidMount() {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['OPTIONLIST']);
      }
    
    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }
    
      
    stateSelect(province) {
    
        this.setState({
          ...this.state,
          state: province
        });
    }

    districtSelect(districtN) {
        var distD = 0;
        for (let i = 0; i < stateDate.states.length; i++) {
            if (this.state.state == stateDate.states[i].state_name) {
                for (let j = 0; j < stateDate.states[i].districts.length; j++) {
                    if (districtN == stateDate.states[i].districts[j].district_name) {
                        distD = stateDate.states[i].districts[j].district_id;
                    }
                }
            }
        }
        this.setState({
            ...this.state,
            district: districtN,
            districtData: distD
          });
    }
    render() {
        return (
            <View>
                <Select
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Select a State in India ..."
                    onSelect={this.stateSelect.bind(this)}>
                    <optionState />
                </Select>
                <OptionList ref="OPTIONLIST"/>
                <Select
                width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Select a District in your state ..."
                    onSelect={this.districtSelect.bind(this)}>
                    <optionDistrict state={this.state.state}/>
                </Select>
                <OptionList ref="OPTIONLIST"/>
                <Text>Selected province of India: {this.state.state}</Text>
                <Text>Selected District of {this.state.state} : {this.state.district}</Text>
            </View>
        )
    }
}



class optionState extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        stateDate.states.map((y) => {
            return (<Option>{y.state_name}</Option>);
        })
    }
}

class optionDistrict extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        for (let i = 0; i < stateDate.states.length; i++) {
            if (this.props.state == stateDate.states[i].state_name) {
                stateDate.states[i].districts.map((y) => {
                    return (<Option>{y.district_name}</Option>);
                });
            }
        }
    }
}

export default formClass;
/*
<Picker.Item label = {stateD.states[0].state_name} value = {0}/>
<Picker.Item label = {stateD.states[1].state_name} value = {1}/>
<Picker.Item label = {stateD.states[2].state_name} value = {2}/>
<Picker.Item label = {stateD.states[3].state_name} value = {3}/>
<Picker.Item label = {stateD.states[4].state_name} value = {4}/>
<Picker.Item label = {stateD.states[5].state_name} value = {5}/>
<Picker.Item label = {stateD.states[6].state_name} value = {6}/>
<Picker.Item label = {stateD.states[7].state_name} value = {7}/>
<Picker.Item label = {stateD.states[8].state_name} value = {8}/>
<Picker.Item label = {stateD.states[9].state_name} value = {9}/>
<Picker.Item label = {stateD.states[10].state_name} value = {10}/>
<Picker.Item label = {stateD.states[11].state_name} value = {11}/>
<Picker.Item label = {stateD.states[12].state_name} value = {12}/>
<Picker.Item label = {stateD.states[13].state_name} value = {13}/>
<Picker.Item label = {stateD.states[14].state_name} value = {14}/>
<Picker.Item label = {stateD.states[15].state_name} value = {15}/>
<Picker.Item label = {stateD.states[16].state_name} value = {16}/>
<Picker.Item label = {stateD.states[17].state_name} value = {17}/>
<Picker.Item label = {stateD.states[18].state_name} value = {18}/>
<Picker.Item label = {stateD.states[19].state_name} value = {19}/>
<Picker.Item label = {stateD.states[20].state_name} value = {20}/>
<Picker.Item label = {stateD.states[21].state_name} value = {21}/>
<Picker.Item label = {stateD.states[22].state_name} value = {22}/>
<Picker.Item label = {stateD.states[23].state_name} value = {23}/>
<Picker.Item label = {stateD.states[24].state_name} value = {24}/>
<Picker.Item label = {stateD.states[25].state_name} value = {25}/>
<Picker.Item label = {stateD.states[26].state_name} value = {26}/>
<Picker.Item label = {stateD.states[27].state_name} value = {27}/>
<Picker.Item label = {stateD.states[28].state_name} value = {28}/>
<Picker.Item label = {stateD.states[29].state_name} value = {29}/>
<Picker.Item label = {stateD.states[30].state_name} value = {30}/>
<Picker.Item label = {stateD.states[31].state_name} value = {31}/>
<Picker.Item label = {stateD.states[32].state_name} value = {32}/>
<Picker.Item label = {stateD.states[33].state_name} value = {33}/>
<Picker.Item label = {stateD.states[34].state_name} value = {34}/>
<Picker.Item label = {stateD.states[35].state_name} value = {35}/>
<Picker.Item label = {stateD.states[36].state_name} value = {36}/>
*/