import React, { useState, useRef, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { Input, notification, Menu } from '../../src/index';

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) => {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? `ant-${suffixCls}` : 'ant';
  };

type LocaleContextProps = Partial<any> & {exist?: boolean}

const ConfigContext = React.createContext({
    getPrefixCls: defaultGetPrefixCls,
});

const ConfigConsumer = ConfigContext.Consumer;

const LocaleContext = createContext<undefined>(undefined);

class LocaleReceiver extends React.Component {
    static defaultProps = {
        componentName: 'global',
    };

    context: LocaleContextProps;

    render() {
        return this.props.children(1,2,this.context)
    }
}

const ProviderChildren:React.FC<any> = (props) => {
    // console.log(props, 'ProviderChildren--props')
    return (
        <div>ProviderChildren</div>
    )
}

const App = () => {
    const [val, setVal] = useState(2);
    const inputRef = useRef(null)
    
    const changeValue = () => {
        setVal(val+1);
    }

    useEffect(() => {
        // console.log(notification, 'notification');
        console.log(inputRef.current, 'inputRef');
        // notification.warning({message:'111'});
    }, [])
    

    return (
        <div>
            
            <Input ref={inputRef}  value={val}/>
            <LocaleReceiver>
                {(a,b,c) => {
                    // console.log(a,'a');
                    // console.log(b,'b');
                    // console.log(c,'c');
                    return (
                    <ConfigConsumer>
                        {
                        item=>{
                            // console.log(item, 'ConfigConumer -- item')
                            return (<ProviderChildren>我来看看</ProviderChildren>)
                        }
                        }
                    </ConfigConsumer>
                )}}
            </LocaleReceiver>
            <button onClick={()=>changeValue()}>改变</button>

            <div>
                <Menu 
                // data={[{a:1},{b:2},{c:3}]} 
                // disabled={true}
                
                />
            </div>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);