Search.setIndex({docnames:["attributes","change_log","getting_started","index","rule_engine/ast","rule_engine/engine","rule_engine/errors","rule_engine/index","rule_engine/parser","syntax"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["attributes.rst","change_log.rst","getting_started.rst","index.rst","rule_engine/ast.rst","rule_engine/engine.rst","rule_engine/errors.rst","rule_engine/index.rst","rule_engine/parser.rst","syntax.rst"],objects:{"rule_engine.ast":{ArithmeticComparisonExpression:[4,1,1,""],ArithmeticExpression:[4,1,1,""],BitwiseExpression:[4,1,1,""],BooleanExpression:[4,1,1,""],ComparisonExpression:[4,1,1,""],ContainsExpression:[4,1,1,""],DataType:[4,1,1,""],ExpressionBase:[4,1,1,""],FloatExpression:[4,1,1,""],FuzzyComparisonExpression:[4,1,1,""],GetAttributeExpression:[4,1,1,""],LeftOperatorRightExpressionBase:[4,1,1,""],LiteralExpressionBase:[4,1,1,""],LogicExpression:[4,1,1,""],NullExpression:[4,1,1,""],Statement:[4,1,1,""],StringExpression:[4,1,1,""],SymbolExpression:[4,1,1,""],TernaryExpression:[4,1,1,""],UnaryExpression:[4,1,1,""],coerce_value:[4,3,1,""],is_integer_number:[4,3,1,""],is_natural_number:[4,3,1,""],is_numeric:[4,3,1,""],is_real_number:[4,3,1,""]},"rule_engine.ast.ArithmeticComparisonExpression":{result_type:[4,2,1,""]},"rule_engine.ast.ArithmeticExpression":{result_type:[4,2,1,""]},"rule_engine.ast.BitwiseExpression":{result_type:[4,2,1,""]},"rule_engine.ast.BooleanExpression":{result_type:[4,2,1,""]},"rule_engine.ast.ComparisonExpression":{result_type:[4,2,1,""]},"rule_engine.ast.ContainsExpression":{result_type:[4,2,1,""]},"rule_engine.ast.DataType":{ARRAY:[4,2,1,""],BOOLEAN:[4,2,1,""],DATETIME:[4,2,1,""],FLOAT:[4,2,1,""],NULL:[4,2,1,""],STRING:[4,2,1,""],UNDEFINED:[4,2,1,""],__call__:[4,3,1,""],from_name:[4,4,1,""],from_type:[4,4,1,""],from_value:[4,4,1,""],is_compatible:[4,4,1,""],is_definition:[4,4,1,""]},"rule_engine.ast.ExpressionBase":{evaluate:[4,4,1,""],reduce:[4,4,1,""],result_type:[4,2,1,""]},"rule_engine.ast.FloatExpression":{result_type:[4,2,1,""]},"rule_engine.ast.FuzzyComparisonExpression":{result_type:[4,2,1,""]},"rule_engine.ast.GetAttributeExpression":{result_type:[4,2,1,""]},"rule_engine.ast.LeftOperatorRightExpressionBase":{__init__:[4,4,1,""],compatible_types:[4,2,1,""]},"rule_engine.ast.LiteralExpressionBase":{__init__:[4,4,1,""]},"rule_engine.ast.LogicExpression":{result_type:[4,2,1,""]},"rule_engine.ast.NullExpression":{result_type:[4,2,1,""]},"rule_engine.ast.StringExpression":{result_type:[4,2,1,""]},"rule_engine.ast.SymbolExpression":{result_type:[4,2,1,""]},"rule_engine.ast.TernaryExpression":{result_type:[4,2,1,""]},"rule_engine.ast.UnaryExpression":{result_type:[4,2,1,""]},"rule_engine.engine":{Builtins:[5,1,1,""],Context:[5,1,1,""],Rule:[5,1,1,""],resolve_attribute:[5,3,1,""],resolve_item:[5,3,1,""],type_resolver_from_dict:[5,3,1,""]},"rule_engine.engine.Builtins":{__init__:[5,4,1,""],from_defaults:[5,4,1,""]},"rule_engine.engine.Context":{__init__:[5,4,1,""],builtins:[5,2,1,""],default_timezone:[5,2,1,""],default_value:[5,2,1,""],regex_flags:[5,2,1,""],resolve:[5,4,1,""],resolve_attribute:[5,4,1,""],resolve_attribute_type:[5,4,1,""],resolve_type:[5,4,1,""],symbols:[5,2,1,""]},"rule_engine.engine.Rule":{__init__:[5,4,1,""],evaluate:[5,4,1,""],filter:[5,4,1,""],is_valid:[5,4,1,""],matches:[5,4,1,""],parser:[5,2,1,""],to_graphviz:[5,4,1,""]},"rule_engine.errors":{AttributeResolutionError:[6,5,1,""],DatetimeSyntaxError:[6,5,1,""],EngineError:[6,5,1,""],EvaluationError:[6,5,1,""],RegexSyntaxError:[6,5,1,""],RuleSyntaxError:[6,5,1,""],SymbolResolutionError:[6,5,1,""],SymbolTypeError:[6,5,1,""],SyntaxError:[6,5,1,""],UNDEFINED:[6,6,1,""]},"rule_engine.errors.AttributeResolutionError":{__init__:[6,4,1,""],attribute_name:[6,2,1,""],object:[6,2,1,""],thing:[6,2,1,""]},"rule_engine.errors.DatetimeSyntaxError":{__init__:[6,4,1,""],value:[6,2,1,""]},"rule_engine.errors.EngineError":{__init__:[6,4,1,""],message:[6,2,1,""]},"rule_engine.errors.RegexSyntaxError":{__init__:[6,4,1,""],error:[6,2,1,""],value:[6,2,1,""]},"rule_engine.errors.RuleSyntaxError":{__init__:[6,4,1,""],token:[6,2,1,""]},"rule_engine.errors.SymbolResolutionError":{__init__:[6,4,1,""],symbol_name:[6,2,1,""],symbol_scope:[6,2,1,""],thing:[6,2,1,""]},"rule_engine.errors.SymbolTypeError":{__init__:[6,4,1,""],expected_type:[6,2,1,""],is_type:[6,2,1,""],is_value:[6,2,1,""],symbol_name:[6,2,1,""]},"rule_engine.parser":{Parser:[8,1,1,""],ParserBase:[8,1,1,""]},"rule_engine.parser.Parser":{__init__:[8,4,1,""]},"rule_engine.parser.ParserBase":{__init__:[8,4,1,""],parse:[8,4,1,""],precedence:[8,2,1,""],reserved_words:[8,2,1,""]},rule_engine:{ast:[4,0,0,"-"],engine:[5,0,0,"-"],errors:[6,0,0,"-"],parser:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","function","Python function"],"4":["py","method","Python method"],"5":["py","exception","Python exception"],"6":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:function","4":"py:method","5":"py:exception","6":"py:data"},terms:{"0b10":9,"0e0":9,"0o10":9,"0x10":9,"0x7f2bdafbe650":2,"15th":1,"1e0":9,"27th":1,"2nd":1,"3rd":1,"abstract":[2,4,5,8],"boolean":[0,4,5,9],"case":[2,4,5],"class":[1,2,6],"default":[0,5,9],"enum":1,"float":[0,2,4,9],"function":[0,1,2],"import":3,"int":[2,5,9],"new":[1,4,6],"null":[1,2,4,9],"return":[2,4,5,8],"super":2,"true":[2,3,4,5,9],"while":[2,5,6,8,9],Added:[1,5,6],For:2,Not:9,One:4,The:[0,2,4,5,6,8,9],There:2,These:[4,5,9],With:2,__call__:4,__init__:[1,2,4,5,6,8],__version__:2,_datatypedef:4,abc:5,abil:1,abl:[4,6,8],about:2,access:[2,5,9],add:2,added:2,addit:[1,2,4,9],addition:5,advanc:3,after:5,against:5,all:[2,4,5,9],allow:[1,2,4,5,8],also:[2,9],altern:2,alwai:4,ani:[2,4,5,8,9],api:[5,8],appear:5,appli:[2,3,5,9],applic:4,appropri:5,arbitrari:[2,3,5],arg:[2,4],argument:[2,5],arithmet:[4,9],arithmeticcomparisonexpress:4,arithmeticexpress:4,arrai:[0,1,2,4,9],artist:2,as_low:0,as_upp:[0,2],aspect:5,assum:2,ast:[2,3,5,6,7,8],astnodebas:4,attribut:[1,3,4,5,6,9],attribute_nam:6,attributeresolutionerror:6,august:1,author:2,automat:[1,2,5],avail:[2,3,6],awar:9,base:[2,5,6,8,9],basic:[3,9],batman:2,becaus:2,becom:2,been:[2,8],befor:[4,5,9],behav:2,behavior:[2,5],being:[2,4,5,6,9],below:9,binari:9,bitwis:[4,9],bitwiseexpress:4,book:2,bool:[4,5,8,9],booleanexpress:[4,9],borrow:2,both:4,boundari:4,builtin:[3,5],call:[2,5],callback:5,can:[0,2,3,4,5,6,8,9],capabl:4,captain:2,case_fals:4,case_tru:4,caus:[6,8],center:4,certain:[2,5],chang:[3,5,6],charact:[4,9],check:[0,2,4,5,9],children:4,classmethod:[4,5],coerce_valu:4,collect:[2,4,5],come:9,comic:2,compar:[2,4,9],comparison:[1,2,4,5,9],comparisonexpress:4,compat:[2,4,5,9],compatible_typ:4,complex:[2,4],compon:[8,9],compos:4,compound:[0,2,4],compris:4,condit:[2,4],configur:2,consid:4,consist:2,constant:[4,5,9],constraint:5,construct:8,constructor:2,contain:[1,2,4,5,6,8,9],containsexpress:4,content:3,context:[0,2,4,5,8,9],contribut:2,conveni:[2,5],convers:[1,4],convert:[4,8],correct:5,correspond:[4,5,8],could:2,coverag:1,creat:[2,3,5,9],curat:1,current:[4,9],custom:[1,5,9],custombuiltinscontext:2,dai:[0,9],darth:3,data:[1,2,3,4,5,9],datatyp:[1,2,3,4],date:[0,2,9],datetim:[0,2,3,4,5,6,9],datetimesyntaxerror:6,dateutil:9,debug:[2,8],decemb:1,decim:9,def:2,default_timezon:[2,5,9],default_timzezon:5,default_valu:[1,2,5],defin:[2,3,4,5,8,9],definit:[4,8],deploy:1,descript:[6,9],desir:2,despit:4,detect:2,determin:[0,2],develop:[1,2],diagram:5,dict:5,dictionari:[0,2,5],differ:[4,9],digraph:5,direct:2,divis:9,document:1,doe:[4,5,8],done:2,dot:2,doubl:9,dt1:4,dt2:4,dure:[6,8],dvader:3,each:[1,2,5],effect:5,effici:8,either:[2,4,5,9],elif:2,email:3,empir:3,empti:2,enabl:8,enclos:9,end:2,engin:[1,2,4,6,7,9],engineerror:6,ensur:[2,5],enumer:2,equal:[4,9],equival:9,error:[2,3,7],eval:2,evalu:[0,2,3,4,5,6,8,9],evaluationerror:[2,6,8,9],exactli:9,exampl:[2,4,5,9],except:[2,4,5,8,9],exclud:9,exec:2,exist:[4,5],expect:[2,6],expected_typ:6,explicit:2,expon:9,expos:[2,5],express:[2,3,5,6,9],expressionbas:4,extern:[4,5],face:5,fail:[0,2,9],fals:[2,3,4,8,9],falsi:6,favor:1,featur:[2,3,8],few:2,filter:[2,5],finit:4,first:[1,2,3,4],first_nam:3,flag:5,flash:2,flexibl:2,floatexpress:[4,9],floor:9,folder:3,follow:[0,2,9],foobar:9,form:5,format:[2,6,9],forward:2,four:2,from:[0,1,2,3,4,5,6,8,9],from_default:[2,5,9],from_nam:4,from_typ:4,from_valu:4,fuzzi:9,fuzzycomparisonexpress:4,gener:[2,3,4,5],get:[1,3,4],getattributeexpress:4,git:1,github:3,given:2,grammar:[3,4,5,6,8],graph:2,graphviz:[1,2,5],greater:[4,9],had:2,hand:2,handl:[2,4,5],has:[0,2,8],have:[2,5],help:[2,4],hexadecim:9,hint:[3,5],hour:0,how:[2,5],howev:5,http:3,identifi:[2,6],improp:6,improperli:6,improv:1,includ:[2,3,9],incompat:[2,6,9],index:[1,3],indic:4,inf:9,infin:9,inform:[1,2,4,5,6],inherit:[6,8],initi:[2,5],insensit:5,inspect:3,instanc:[2,4,5],instead:2,integ:[2,4],interfac:5,invalid:2,involv:[4,8],is_compat:4,is_definit:4,is_empti:0,is_integer_numb:4,is_natural_numb:4,is_numer:4,is_real_numb:4,is_typ:6,is_valid:[2,5],is_valu:6,iso:9,isopars:9,issu:[2,5,6],item:[1,2,4,5],iter:[2,5],its:[2,4],itself:[4,5],just:2,kei:[2,5],keyword:2,kind:[2,4],know:2,known:[2,5],kwarg:[1,2,4,5,8],languag:[2,3],last_nam:3,later:8,lead:9,lee:2,left:[2,9],leftoperatorrightexpressionbas:4,length:0,less:[4,9],letter:[2,9],level:4,librari:3,like:2,list:[1,9],liter:[2,3,5,8],literalexpressionbas:4,local:5,log:3,logic:[3,4,5,8,9],logicexpress:4,look:[2,5],loss:4,luke:3,mai:[2,9],major:1,make:[2,8],mani:8,manner:[4,9],map:[2,4,5,8],march:1,marvel:2,match:[2,3,4,5,9],math:9,mathemat:9,meant:2,member:[0,1,2,4,5,8,9],membership:9,messag:6,method:[2,4,5,9],microsecond:0,midnight:[2,9],might:2,millisecond:0,minut:[0,2],miss:5,modifi:2,modul:[3,4,5,6,8],modulo:9,month:0,more:[2,3,8],most:2,multipl:[8,9],must:[2,4,5,9],name:[0,2,3,4,5,6,8,9],namedtupl:5,namespac:5,nan:[4,9],nativ:[0,4,6],natur:[4,9],necessari:[2,5],necessarili:5,need:[2,5],neg:4,neither:2,net:3,node:[4,6,8],non:[2,4,9],none:[2,4,5,6],nonetyp:9,normal:[2,9],notat:9,note:[1,2,9],notic:2,now:[2,9],nullexpress:[4,9],number:[2,4,9],numer:[4,9],object:[0,3,4,5,6,8,9],object_:[4,5,6],object_typ:5,occur:6,octal:9,octob:1,off:9,often:2,omit:2,onc:[2,8],one:[2,4,5],ones:2,onli:9,open:9,oper:[0,2,5,8],option:[1,2,3,5,8,9],order:9,org:3,other:[2,5,6],otherwis:[2,4],outlin:9,output:1,over:5,overlap:2,overrid:2,overridden:9,own:[0,3],packag:[2,5,6],page:3,paramet:[2,4,5,6,8],parent:2,pars:[4,5,6,8,9],parser:[3,5,7,9],parserbas:8,particular:4,pass:[2,5],perform:5,phase:[6,8],place:[5,8,9],ply:[6,8],point:[4,9],popul:2,portion:2,possibl:2,potenti:2,preced:8,prefix:[2,5,9],previou:2,primari:[2,5],prior:2,project:3,proper:1,provid:[2,3,5,8,9],publish:2,punctuat:2,purpos:[2,3,4],python:[0,2,3,4,5,6,9],python_typ:4,python_valu:4,quot:9,rais:[2,4,5,6,8,9],real:4,reason:2,rebel:3,recurs:[0,4],reduc:[4,8],reduct:[6,8],refer:[2,5],referenc:2,regard:[5,6],regex:[2,3,5,9],regex_flag:5,regexsyntaxerror:6,regular:[2,3,4,6,9],relat:[6,8,9],releas:[1,2],remov:[1,2],replac:[4,5],report:1,repres:[4,9],requir:[2,9],reserv:8,reserved_word:8,resolut:[4,5,6],resolv:[0,1,4,5,6,9],resolve_attribut:[2,5],resolve_attribute_typ:5,resolve_item:[2,5],resolve_typ:5,respect:[2,9],rest:2,result:[4,5],result_typ:4,retriev:[1,4,5],right:[2,9],root:6,rubi:2,rule:[0,1,4,5,6,8],rule_engin:[2,3,4,5,6,8],rulesyntaxerror:6,safe:[2,4],same:[2,4,5],scientif:9,scope:[4,5,6],search:[3,4,5,9],second:[0,2,4],section:2,secur:2,see:[2,3,5],self:2,sensit:5,sentinel:6,separ:4,set:[5,9],share:2,shift:[4,9],should:[2,5,6],show:9,side:[2,4],signatur:2,similar:[2,9],simpl:2,simpli:2,singl:[2,5,9],skywalk:3,small:9,smaller:4,some:[2,3,5],someth:6,sourc:[2,4,5,6,8],space:2,special:5,specif:8,specifi:[1,2,4,5,6,8,9],stan:2,standard:9,start:[1,3],statement:[4,8],str:[2,4,5,6,8,9],string:[0,2,3,4,5,9],stringexpress:4,structur:[2,5],subclass:[4,5,9],submemb:0,subset:4,subtract:[4,9],success:4,successfulli:2,suitabl:[2,5],support:[1,2,4,5],symbol:[3,4,5,6],symbol_nam:6,symbol_scop:6,symbolexpress:4,symbolresolutionerror:[2,5,6],symboltypeerror:[2,6],syntact:5,syntax:[2,3,4,5,6,8],syntaxerror:6,tabl:9,take:[2,4,8],target:2,team:1,techniqu:2,ternari:4,ternaryexpress:4,test:[1,2,4,5],text:[2,3,4,5,6,8],than:[4,9],thei:[2,3],them:2,thi:[0,1,2,3,4,5,6,8],thing:[0,2,4,5,6],those:2,through:[2,9],time:[2,4,5,6,8,9],timestamp:[5,9],timezon:[2,5,9],titl:2,to_default_dict:1,to_default_resolv:1,to_graphviz:[2,5],to_recursive_resolv:1,todai:9,token:6,top:4,travi:1,treat:2,tree:[2,4,5,8],trigger:6,tupl:[4,9],two:[2,4],type:[0,1,3,4,5,6,8,9],type_:4,type_resolv:[2,5],type_resolver_from_dict:[2,5],typeerror:[4,5],tzinfo:5,unaryexpress:4,undefin:[2,4,5,6],underli:9,unit:1,unknown:[2,4],unlik:5,unnecessari:2,untrust:2,use:[2,4,5,6,9],used:[0,2,4,5,6,9],useful:[2,4],user:2,uses:2,using:[1,2,5,8,9],utc:5,vader:3,valid:[2,4,5,6],valu:[0,4,5,6],value_typ:4,value_type_nul:4,valueerror:4,variabl:[2,5],variat:2,variou:[2,8],veri:9,verifi:[4,5],verify_typ:4,version:[2,3,4,5,6],versionad:6,via:2,wai:2,weekdai:0,well:[4,5],were:2,what:[5,6],when:[0,2,4,5,6,8,9],where:[2,6],whether:[2,3,4,5,8],which:[0,2,3,4,5,6,8,9],whitelist:5,whitespac:2,whole:4,whose:2,within:[2,4,5,6,8],without:[2,4],word:8,work:9,worthi:1,would:[2,5],written:3,xor:[4,9],year:0,yield:[2,5],yyyi:2,zero:2,zerostein:3,zone_nam:0},titles:["Data Attributes","Change Log","Getting Started","Rule Engine Documentation","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">ast</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">engine</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">errors</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">rule_engine</span></code>","<code class=\"xref py py-mod docutils literal notranslate\"><span class=\"pre\">parser</span></code>","Rule Syntax"],titleterms:{"class":[4,5,8],"default":2,"function":[4,5],advanc:2,ast:4,attribut:[0,2],back:2,base:4,basic:2,builtin:[0,2,9],chang:[1,2],custom:2,data:[0,6],document:3,engin:[3,5],error:6,exampl:3,except:6,express:4,get:2,grammar:9,hint:2,indic:3,inspect:2,keyword:9,left:4,liter:[4,9],log:1,miscellan:4,object:2,oper:[4,9],parser:8,reserv:9,resolv:2,right:4,rule:[2,3,9],rule_engin:7,set:2,start:2,support:9,symbol:[2,9],syntax:9,tabl:3,type:2,usag:[2,3],valu:[2,9],version:1}})