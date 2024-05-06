import type {FullScreenName} from '@libs/Navigation/types';
import SCREENS from '@src/SCREENS';

const FULL_SCREEN_TO_RHP_MAPPING: Partial<Record<FullScreenName, string[]>> = {
    [SCREENS.WORKSPACE.PROFILE]: [SCREENS.WORKSPACE.NAME, SCREENS.WORKSPACE.ADDRESS, SCREENS.WORKSPACE.CURRENCY, SCREENS.WORKSPACE.DESCRIPTION, SCREENS.WORKSPACE.SHARE],
    [SCREENS.WORKSPACE.REIMBURSE]: [SCREENS.WORKSPACE.RATE_AND_UNIT, SCREENS.WORKSPACE.RATE_AND_UNIT_RATE, SCREENS.WORKSPACE.RATE_AND_UNIT_UNIT],
    [SCREENS.WORKSPACE.MEMBERS]: [
        SCREENS.WORKSPACE.INVITE,
        SCREENS.WORKSPACE.INVITE_MESSAGE,
        SCREENS.WORKSPACE.MEMBER_DETAILS,
        SCREENS.WORKSPACE.OWNER_CHANGE_CHECK,
        SCREENS.WORKSPACE.OWNER_CHANGE_SUCCESS,
        SCREENS.WORKSPACE.OWNER_CHANGE_ERROR,
    ],
    [SCREENS.WORKSPACE.WORKFLOWS]: [
        SCREENS.WORKSPACE.WORKFLOWS_APPROVER,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_FREQUENCY,
        SCREENS.WORKSPACE.WORKFLOWS_AUTO_REPORTING_MONTHLY_OFFSET,
        SCREENS.WORKSPACE.WORKFLOWS_PAYER,
    ],
    [SCREENS.WORKSPACE.ACCOUNTING.ROOT]: [
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CHART_OF_ACCOUNTS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CLASSES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_TAXES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_LOCATIONS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_CUSTOMERS,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_DATE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_INVOICE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT_PAYABLE_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_COMPANY_CARD_EXPENSE_ACCOUNT_COMPANY_CARD_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_PREFERRED_EXPORTER,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_EXPORT_OUT_OF_POCKET_EXPENSES_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_NON_REIMBURSABLE_DEFAULT_VENDOR_SELECT,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_ADVANCED,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.QUICKBOOKS_ONLINE_INVOICE_ACCOUNT_SELECTOR,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_IMPORT,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_ORGANIZATION,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_CUSTOMER,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_TAXES,
        SCREENS.WORKSPACE.ACCOUNTING.XERO_ADVANCED,
    ],
    [SCREENS.WORKSPACE.TAXES]: [
        SCREENS.WORKSPACE.TAXES_SETTINGS,
        SCREENS.WORKSPACE.TAX_CREATE,
        SCREENS.WORKSPACE.TAXES_SETTINGS_CUSTOM_TAX_NAME,
        SCREENS.WORKSPACE.TAXES_SETTINGS_FOREIGN_CURRENCY_DEFAULT,
        SCREENS.WORKSPACE.TAXES_SETTINGS_WORKSPACE_CURRENCY_DEFAULT,
        SCREENS.WORKSPACE.TAX_CREATE,
        SCREENS.WORKSPACE.TAX_EDIT,
        SCREENS.WORKSPACE.TAX_NAME,
        SCREENS.WORKSPACE.TAX_VALUE,
    ],
    [SCREENS.WORKSPACE.TAGS]: [SCREENS.WORKSPACE.TAGS_SETTINGS, SCREENS.WORKSPACE.TAGS_EDIT, SCREENS.WORKSPACE.TAG_CREATE, SCREENS.WORKSPACE.TAG_SETTINGS, SCREENS.WORKSPACE.TAG_EDIT],
    [SCREENS.WORKSPACE.CATEGORIES]: [SCREENS.WORKSPACE.CATEGORY_CREATE, SCREENS.WORKSPACE.CATEGORY_SETTINGS, SCREENS.WORKSPACE.CATEGORIES_SETTINGS, SCREENS.WORKSPACE.CATEGORY_EDIT],
    [SCREENS.WORKSPACE.DISTANCE_RATES]: [
        SCREENS.WORKSPACE.CREATE_DISTANCE_RATE,
        SCREENS.WORKSPACE.DISTANCE_RATES_SETTINGS,
        SCREENS.WORKSPACE.DISTANCE_RATE_EDIT,
        SCREENS.WORKSPACE.DISTANCE_RATE_DETAILS,
    ],
};

export default FULL_SCREEN_TO_RHP_MAPPING;
