import { StyleSheet } from "react-native";
import { THEME } from "../constants/Theme";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  logoHeader: {
    height: '25%', 
    backgroundColor: THEME.darkHeader,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: '60%', 
    height: 60,
  },

  formContent: {
    flex: 1,
    padding: 25,
    marginTop: -20,
    backgroundColor: THEME.background,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    fontWeight: '700', 
    color: THEME.text,
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: THEME.placeholder,
    marginBottom: 8,
    marginLeft: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: THEME.inputBorder,
    borderRadius: 12, 
    paddingHorizontal: 15,
    fontSize: 16,
    color: THEME.text,
    backgroundColor: '#fff', 
  },

  button: {
    backgroundColor: THEME.active,
    height: 55,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: THEME.active,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  forgotPass: {
    marginTop: 15,
    alignItems: 'center',
  },
  forgotPassText: {
    color: THEME.placeholder,
    fontSize: 14,
  },
});