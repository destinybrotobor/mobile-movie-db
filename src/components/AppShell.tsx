import { ReactNode } from "react"
import { KeyboardAvoidingView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const AppShell = ({children} : {children: ReactNode}) => {
    return (
        <SafeAreaView
            style={{
                paddingHorizontal: 6,
                flex: 1,
                backgroundColor:"#000000"
            }}
        >
            <KeyboardAvoidingView>
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default AppShell