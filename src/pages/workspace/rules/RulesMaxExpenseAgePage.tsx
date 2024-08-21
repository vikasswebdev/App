import type {StackScreenProps} from '@react-navigation/stack';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import FormProvider from '@components/Form/FormProvider';
import InputWrapper from '@components/Form/InputWrapper';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import ScreenWrapper from '@components/ScreenWrapper';
import Text from '@components/Text';
import TextInput from '@components/TextInput';
import useAutoFocusInput from '@hooks/useAutoFocusInput';
import useLocalize from '@hooks/useLocalize';
import usePolicy from '@hooks/usePolicy';
import useThemeStyles from '@hooks/useThemeStyles';
import Navigation from '@libs/Navigation/Navigation';
import type {SettingsNavigatorParamList} from '@libs/Navigation/types';
import AccessOrNotFoundWrapper from '@pages/workspace/AccessOrNotFoundWrapper';
import * as Policy from '@userActions/Policy/Policy';
import CONST from '@src/CONST';
import ONYXKEYS from '@src/ONYXKEYS';
import type SCREENS from '@src/SCREENS';
import INPUT_IDS from '@src/types/form/RulesMaxExpenseAgeForm';

type RulesMaxExpenseAgePageProps = StackScreenProps<SettingsNavigatorParamList, typeof SCREENS.WORKSPACE.RULES_MAX_EXPENSE_AGE>;

function RulesMaxExpenseAgePage({route}: RulesMaxExpenseAgePageProps) {
    const {translate} = useLocalize();
    const styles = useThemeStyles();
    const {inputCallbackRef} = useAutoFocusInput();
    const policy = usePolicy(route.params.policyID);

    const defaultValue = policy?.maxExpenseAge === CONST.DISABLED_MAX_EXPENSE_VALUE || !policy?.maxExpenseAge ? '' : `${policy?.maxExpenseAge}`;

    const [maxExpenseAge, setMaxExpenseAge] = useState(defaultValue);

    const submit = useCallback(() => {
        let age;
        if (!maxExpenseAge) {
            age = CONST.DISABLED_MAX_EXPENSE_VALUE;
        }
        age = parseInt(maxExpenseAge, 10);
        Policy.setPolicyMaxExpenseAge(route.params.policyID, age);
        Navigation.goBack();
    }, [maxExpenseAge, route.params.policyID]);

    const onChangeMaxExpenseAge = useCallback((newValue: string) => {
        // replace all characters that are not spaces or digits
        const validMaxExpenseAge = newValue.replace(/[^0-9]/g, '');
        setMaxExpenseAge(validMaxExpenseAge);
    }, []);

    return (
        <AccessOrNotFoundWrapper
            policyID={route.params.policyID ?? '-1'}
            accessVariants={[CONST.POLICY.ACCESS_VARIANTS.ADMIN, CONST.POLICY.ACCESS_VARIANTS.PAID]}
            featureName={CONST.POLICY.MORE_FEATURES.ARE_RULES_ENABLED}
        >
            <ScreenWrapper
                includeSafeAreaPaddingBottom={false}
                shouldEnableMaxHeight
                testID={RulesMaxExpenseAgePage.displayName}
            >
                <HeaderWithBackButton
                    title={translate('workspace.rules.individualExpenseRules.maxExpenseAge')}
                    onBackButtonPress={() => Navigation.goBack()}
                />
                <FormProvider
                    formID={ONYXKEYS.FORMS.RULES_MAX_EXPENSE_AGE_FORM}
                    submitButtonText={translate('workspace.editor.save')}
                    style={[styles.flexGrow1, styles.ph5]}
                    onSubmit={submit}
                    enabledWhenOffline
                >
                    <View style={styles.mb4}>
                        <InputWrapper
                            InputComponent={TextInput}
                            inputID={INPUT_IDS.MAX_EXPENSE_AGE}
                            label={translate('workspace.rules.individualExpenseRules.maxAge')}
                            suffixCharacter={translate('common.days')}
                            suffixStyle={styles.colorMuted}
                            role={CONST.ROLE.PRESENTATION}
                            inputMode={CONST.INPUT_MODE.NUMERIC}
                            value={maxExpenseAge}
                            onChangeText={onChangeMaxExpenseAge}
                            ref={inputCallbackRef}
                            maxLength={CONST.FORM_CHARACTER_LIMIT}
                        />
                        <Text style={[styles.mutedTextLabel, styles.mt2]}>{translate('workspace.rules.individualExpenseRules.maxExpenseAgeDescription')}</Text>
                    </View>
                </FormProvider>
            </ScreenWrapper>
        </AccessOrNotFoundWrapper>
    );
}

RulesMaxExpenseAgePage.displayName = 'RulesMaxExpenseAgePage';

export default RulesMaxExpenseAgePage;
