<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>DataDrivenDemo</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>1ac31ace-3ff1-4e3e-9245-075bc1070d91</testSuiteGuid>
   <testCaseLink>
      <guid>e284136f-74d9-4c53-b052-7beb991ada12</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <iterationNameVariable>
         <defaultValue>''</defaultValue>
         <description></description>
         <id>01bbe73f-7ddd-4697-b8ab-36e9eea38815</id>
         <masked>false</masked>
         <name>username</name>
      </iterationNameVariable>
      <testCaseId>Test Cases/Demo/DataDrivenTestingDemo</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>07cd0c45-ee82-44c5-8f57-0322da34e6b6</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/LoginData</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>07cd0c45-ee82-44c5-8f57-0322da34e6b6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>username</value>
         <variableId>01bbe73f-7ddd-4697-b8ab-36e9eea38815</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>07cd0c45-ee82-44c5-8f57-0322da34e6b6</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>password</value>
         <variableId>c5a99430-7543-486e-adba-d07b1f77d00e</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
