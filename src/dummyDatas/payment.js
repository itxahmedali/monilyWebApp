const paymentData = {
    "Bill": [
        {
            "SalesTermRef": {
                "value": "4"
            },
            "DueDate": "2022-04-30",
            "Balance": 0,
            "domain": "QBO",
            "sparse": false,
            "Id": "255",
            "SyncToken": "4",
            "MetaData": {
                "CreateTime": "2022-06-10T10:54:20-07:00",
                "LastUpdatedTime": "2022-08-01T10:20:21-07:00"
            },
            "TxnDate": "2022-03-31",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [
                {
                    "TxnId": "474",
                    "TxnType": "BillPaymentCheck"
                },
                {
                    "TxnId": "451",
                    "TxnType": "BillPaymentCheck"
                }
            ],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Description": "accounting services",
                    "Amount": 12700,
                    "DetailType": "AccountBasedExpenseLineDetail",
                    "AccountBasedExpenseLineDetail": {
                        "AccountRef": {
                            "value": "14",
                            "name": "Legal & Professional Services"
                        },
                        "BillableStatus": "NotBillable",
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                }
            ],
            "VendorRef": {
                "value": "18",
                "name": "Monily"
            },
            "APAccountRef": {
                "value": "36",
                "name": "Accounts Payable (A/P)"
            },
            "TotalAmt": 12700
        },
        {
            "DueDate": "2022-08-18",
            "Balance": 0,
            "domain": "QBO",
            "sparse": false,
            "Id": "472",
            "SyncToken": "2",
            "MetaData": {
                "CreateTime": "2022-07-31T12:26:01-07:00",
                "LastUpdatedTime": "2022-08-01T10:17:10-07:00"
            },
            "TxnDate": "2022-08-01",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "LinkedTxn": [
                {
                    "TxnId": "473",
                    "TxnType": "BillPaymentCheck"
                }
            ],
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Description": "demo",
                    "Amount": 3800,
                    "DetailType": "AccountBasedExpenseLineDetail",
                    "AccountBasedExpenseLineDetail": {
                        "AccountRef": {
                            "value": "25",
                            "name": "Ask My Accountant"
                        },
                        "BillableStatus": "NotBillable",
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                }
            ],
            "VendorRef": {
                "value": "29",
                "name": "AAA"
            },
            "APAccountRef": {
                "value": "36",
                "name": "Accounts Payable (A/P)"
            },
            "TotalAmt": 3800
        },
        {
            "DueDate": "2022-08-01",
            "Balance": 3800,
            "domain": "QBO",
            "sparse": false,
            "Id": "471",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-07-31T12:23:15-07:00",
                "LastUpdatedTime": "2022-07-31T12:23:15-07:00"
            },
            "DocNumber": "21",
            "TxnDate": "2022-08-01",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Description": "demo",
                    "Amount": 3800,
                    "DetailType": "AccountBasedExpenseLineDetail",
                    "AccountBasedExpenseLineDetail": {
                        "AccountRef": {
                            "value": "25",
                            "name": "Ask My Accountant"
                        },
                        "BillableStatus": "NotBillable",
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                }
            ],
            "VendorRef": {
                "value": "10",
                "name": "7-Eleven"
            },
            "APAccountRef": {
                "value": "36",
                "name": "Accounts Payable (A/P)"
            },
            "TotalAmt": 3800
        },
        {
            "SalesTermRef": {
                "value": "4"
            },
            "DueDate": "2022-05-30",
            "Balance": 12653,
            "domain": "QBO",
            "sparse": false,
            "Id": "256",
            "SyncToken": "0",
            "MetaData": {
                "CreateTime": "2022-06-10T10:54:55-07:00",
                "LastUpdatedTime": "2022-06-10T10:54:55-07:00"
            },
            "TxnDate": "2022-04-30",
            "CurrencyRef": {
                "value": "USD",
                "name": "United States Dollar"
            },
            "Line": [
                {
                    "Id": "1",
                    "LineNum": 1,
                    "Description": "accounting services",
                    "Amount": 12653,
                    "DetailType": "AccountBasedExpenseLineDetail",
                    "AccountBasedExpenseLineDetail": {
                        "AccountRef": {
                            "value": "14",
                            "name": "Legal & Professional Services"
                        },
                        "BillableStatus": "NotBillable",
                        "TaxCodeRef": {
                            "value": "NON"
                        }
                    }
                }
            ],
            "VendorRef": {
                "value": "18",
                "name": "Monily"
            },
            "APAccountRef": {
                "value": "36",
                "name": "Accounts Payable (A/P)"
            },
            "TotalAmt": 12653
        }
    ],
    "startPosition": 1,
    "maxResults": 4,
    "totalCount": 4
}
export default paymentData