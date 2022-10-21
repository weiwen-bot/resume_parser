from nltk.corpus import stopwords
RESUME_SECTIONS_PROFESSIONAL = [
                    'experience',
                    'education',
                    'co-curricular',
                    'interests',
#                    'caffe',
                    'qualifications',
                    'campus',
#                    'laboratory',
                    'awards',
                    'professional experience',
                    'project experience',
                    'skills',
                    'skills&hobbies',
                    'dear',
                    'certifications',
                    'objective',
                    'career objective',
                    'summary',
                    'leadership'
                ]



import json
import pandas as pd
import os

#r = json.dumps(r)
#loaded_r = json.loads(r)
#loaded_r['rating'] #Output 
#print(type(r)) #Output str
#print(type(loaded_r)) 


#directory = 'C:/Users/WeiWen/.spyder-py3/FirstAssignmentPythonOCR/data'
#with os.scandir(directory) as now:
#    for g in now:
#        input_file = g
#        df = pd.read_csv(input_file)
##        input_list = df['content'].tolist()
#        print(g.name[:-4])
        


#r = {'is_claimed': 'True' , 'rating': 3.5}
#
#
#with open( "testing_result.json", 'w') as abc:
#            json.dump(r, abc,indent=True)
#            print("done")

#for i in set(RESUME_SECTIONS_PROFESSIONAL):
#    if "project experience" == set(RESUME_SECTIONS_PROFESSIONAL):
#        print("yes"+i)

#print(mergeddata)

#df = pd.DataFrame(columns=['filename','name','number','skills'])
#
#for i in range(10):
#    df = df.append(data,ignore_index=True)
#    
#df.to_csv(r'C:/Users/WeiWen/Documents/Major_project_version1/lol.csv')
#            