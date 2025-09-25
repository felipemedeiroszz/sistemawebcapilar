import React, { useState } from 'react';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { EmailConfirmedForm } from './EmailConfirmedForm';
import { NewPasswordForm } from './NewPasswordForm';
import { PasswordChangedSuccess } from './PasswordChangedSuccess';

type FlowStep = 'forgot' | 'confirmed' | 'newPassword' | 'success';

interface ForgotPasswordFlowProps {
  onBackToLogin: () => void;
}

export function ForgotPasswordFlow({ onBackToLogin }: ForgotPasswordFlowProps) {
  const [currentStep, setCurrentStep] = useState<FlowStep>('forgot');
  const [userEmail, setUserEmail] = useState('');

  const handleEmailConfirmed = (email: string) => {
    setUserEmail(email);
    setCurrentStep('confirmed');
  };

  const handleContinueToNewPassword = () => {
    setCurrentStep('newPassword');
  };

  const handlePasswordChanged = () => {
    setCurrentStep('success');
  };

  const handleBackToLogin = () => {
    setCurrentStep('forgot');
    setUserEmail('');
    onBackToLogin();
  };

  switch (currentStep) {
    case 'forgot':
      return (
        <ForgotPasswordForm
          onBackToLogin={onBackToLogin}
          onEmailConfirmed={handleEmailConfirmed}
        />
      );
    
    case 'confirmed':
      return (
        <EmailConfirmedForm
          email={userEmail}
          onContinue={handleContinueToNewPassword}
        />
      );
    
    case 'newPassword':
      return (
        <NewPasswordForm
          email={userEmail}
          onPasswordChanged={handlePasswordChanged}
        />
      );
    
    case 'success':
      return (
        <PasswordChangedSuccess
          onBackToLogin={handleBackToLogin}
        />
      );
    
    default:
      return null;
  }
}