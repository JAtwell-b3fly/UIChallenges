import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
<<<<<<< Updated upstream
import Avatar from './Avatar'; //import the custom created avatar component
import Logo from './Logo'; //import the image of the logo
import styles from './RegistrationStyles'; //import the custom stylesheet
=======

//import the external files
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import RegisterButton from './components/RegisterButton';
import AlreadyHaveAccountLink from './components/AlreadyHaveAccountLink';
import Avatar from './components/Avatar';
import Logo from './assets/logo';
import RegistrationLayout from './layouts/RegistrationLayout';
import CreateAccountButton from '../components/CreateAccountButton';
>>>>>>> Stashed changes

const RegistrationScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('male');

  const handleCreateAccount = () => {
    // TODO: submit form data to the database
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Avatar style={styles.avatar} />
<<<<<<< Updated upstream
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.genderContainer}>
          <Text style={styles.genderLabel}>Gender:</Text>
          <View style={styles.radioContainer}>
            <TouchableOpacity
              style={gender === 'male' ? styles.radioChecked : styles.radio}
              onPress={() => setGender('male')}
            >
              <Text style={styles.radioText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={gender === 'female' ? styles.radioChecked : styles.radio}
              onPress={() => setGender('female')}
            >
              <Text style={styles.radioText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
          <Text style={styles.createButtonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginLinkText}>Already have an account? Login here</Text>
        </TouchableOpacity>
      </View>
=======
      <RegistrationLayout />
        <RegistrationForm />
        <View>
          <CreateAccountButton />
          <AlreadyHaveAccountLink />
        </View>
>>>>>>> Stashed changes
    </View>
  );
};

export default RegistrationScreen;
