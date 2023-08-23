import React, { useRef,  } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";



 function NewGlobe(props) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/NewGlobe.glb");




 

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="sketchfabtimeframe">
            <group name="Object_102" scale={0}>
              <group name="frame_29">
                <group name="Object_104" />
                <group name="Object_105" />
                <group name="Object_106" />
              </group>
            </group>
            <group name="Object_107" scale={0}>
              <group name="frame_28">
                <group name="Object_109" />
                <group name="Object_110" />
                <group name="Object_111" />
              </group>
            </group>
            <group name="Object_112" scale={0}>
              <group name="frame_27">
                <group name="Object_114" />
                <group name="Object_115" />
                <group name="Object_116" />
              </group>
            </group>
            <group name="Object_117" scale={0}>
              <group name="frame_26">
                <group name="Object_119" />
                <group name="Object_120" />
                <group name="Object_121" />
              </group>
            </group>
            <group name="Object_12" scale={0}>
              <group name="frame_47">
                <group name="Object_14" />
                <group name="Object_15" />
                <group name="Object_16" />
              </group>
            </group>
            <group name="Object_122" scale={0}>
              <group name="frame_25">
                <group name="Object_124" />
                <group name="Object_125" />
                <group name="Object_126" />
              </group>
            </group>
            <group name="Object_127" scale={0}>
              <group name="frame_24">
                <group name="Object_129" />
                <group name="Object_130" />
                <group name="Object_131" />
              </group>
            </group>
            <group name="Object_132" scale={0}>
              <group name="frame_23">
                <group name="Object_134" />
                <group name="Object_135" />
                <group name="Object_136" />
              </group>
            </group>
            <group name="Object_137" scale={0}>
              <group name="frame_22">
                <group name="Object_139" />
                <group name="Object_140" />
                <group name="Object_141" />
              </group>
            </group>
            <group name="Object_142" scale={0}>
              <group name="frame_21">
                <group name="Object_144" />
                <group name="Object_145" />
                <group name="Object_146" />
              </group>
            </group>
            <group name="Object_147" scale={0}>
              <group name="frame_20">
                <group name="Object_149" />
                <group name="Object_150" />
                <group name="Object_151" />
              </group>
            </group>
            <group name="Object_152" scale={0}>
              <group name="frame_19">
                <group name="Object_154" />
                <group name="Object_155" />
                <group name="Object_156" />
              </group>
            </group>
            <group name="Object_157" scale={0}>
              <group name="frame_18">
                <group name="Object_159" />
                <group name="Object_160" />
                <group name="Object_161" />
              </group>
            </group>
            <group name="Object_162" scale={0}>
              <group name="frame_17">
                <group name="Object_164" />
                <group name="Object_165" />
                <group name="Object_166" />
              </group>
            </group>
            <group name="Object_167" scale={0}>
              <group name="frame_16">
                <group name="Object_169" />
                <group name="Object_170" />
                <group name="Object_171" />
              </group>
            </group>
            <group name="Object_17" scale={0}>
              <group name="frame_46">
                <group name="Object_19" />
                <group name="Object_20" />
                <group name="Object_21" />
              </group>
            </group>
            <group name="Object_172" scale={0}>
              <group name="frame_15">
                <group name="Object_174" />
                <group name="Object_175" />
                <group name="Object_176" />
              </group>
            </group>
            <group name="Object_177" scale={0}>
              <group name="frame_14">
                <group name="Object_179" />
                <group name="Object_180" />
                <group name="Object_181" />
              </group>
            </group>
            <group name="Object_182" scale={0}>
              <group name="frame_13">
                <group name="Object_184" />
                <group name="Object_185" />
                <group name="Object_186" />
              </group>
            </group>
            <group name="Object_187" scale={0}>
              <group name="frame_12">
                <group name="Object_189" />
                <group name="Object_190" />
                <group name="Object_191" />
              </group>
            </group>
            <group name="Object_192" scale={0}>
              <group name="frame_11">
                <group name="Object_194" />
                <group name="Object_195" />
                <group name="Object_196" />
              </group>
            </group>
            <group name="Object_197" scale={0}>
              <group name="frame_10">
                <group name="Object_199" />
                <group name="Object_200" />
                <group name="Object_201" />
              </group>
            </group>
            <group name="Object_2" scale={0}>
              <group name="frame_49">
                <group name="Object_4" />
                <group name="Object_5" />
                <group name="Object_6" />
              </group>
            </group>
            <group name="Object_202" scale={0}>
              <group name="frame_9">
                <group name="Object_204" />
                <group name="Object_205" />
                <group name="Object_206" />
              </group>
            </group>
            <group name="Object_207" scale={0}>
              <group name="frame_8">
                <group name="Object_209" />
                <group name="Object_210" />
                <group name="Object_211" />
              </group>
            </group>
            <group name="Object_212" scale={0}>
              <group name="frame_7">
                <group name="Object_214" />
                <group name="Object_215" />
                <group name="Object_216" />
              </group>
            </group>
            <group name="Object_217" scale={0}>
              <group name="frame_6">
                <group name="Object_219" />
                <group name="Object_220" />
                <group name="Object_221" />
              </group>
            </group>
            <group name="Object_22" scale={0}>
              <group name="frame_45">
                <group name="Object_24" />
                <group name="Object_25" />
                <group name="Object_26" />
              </group>
            </group>
            <group name="Object_222" scale={0}>
              <group name="frame_5">
                <group name="Object_224" />
                <group name="Object_225" />
                <group name="Object_226" />
              </group>
            </group>
            <group name="Object_227" scale={0}>
              <group name="frame_4">
                <group name="Object_229" />
                <group name="Object_230" />
                <group name="Object_231" />
              </group>
            </group>
            <group name="Object_232" scale={0}>
              <group name="frame_3">
                <group name="Object_234" />
                <group name="Object_235" />
                <group name="Object_236" />
              </group>
            </group>
            <group name="Object_237" scale={0}>
              <group name="frame_2">
                <group name="Object_239" />
                <group name="Object_240" />
                <group name="Object_241" />
              </group>
            </group>
            <group name="Object_242" scale={0}>
              <group name="frame_1">
                <group name="Object_244" />
                <group name="Object_245" />
                <group name="Object_246" />
              </group>
            </group>
            <group name="Object_247">
              <group name="frame_0">
                <group name="Object_249" />
                <group name="Object_250" />
                <group name="Object_251" />
              </group>
            </group>
            <group name="Object_27" scale={0}>
              <group name="frame_44">
                <group name="Object_29" />
                <group name="Object_30" />
                <group name="Object_31" />
              </group>
            </group>
            <group name="Object_32" scale={0}>
              <group name="frame_43">
                <group name="Object_34" />
                <group name="Object_35" />
                <group name="Object_36" />
              </group>
            </group>
            <group name="Object_37" scale={0}>
              <group name="frame_42">
                <group name="Object_39" />
                <group name="Object_40" />
                <group name="Object_41" />
              </group>
            </group>
            <group name="Object_42" scale={0}>
              <group name="frame_41">
                <group name="Object_44" />
                <group name="Object_45" />
                <group name="Object_46" />
              </group>
            </group>
            <group name="Object_47" scale={0}>
              <group name="frame_40">
                <group name="Object_49" />
                <group name="Object_50" />
                <group name="Object_51" />
              </group>
            </group>
            <group name="Object_52" scale={0}>
              <group name="frame_39">
                <group name="Object_54" />
                <group name="Object_55" />
                <group name="Object_56" />
              </group>
            </group>
            <group name="Object_57" scale={0}>
              <group name="frame_38">
                <group name="Object_59" />
                <group name="Object_60" />
                <group name="Object_61" />
              </group>
            </group>
            <group name="Object_62" scale={0}>
              <group name="frame_37">
                <group name="Object_64" />
                <group name="Object_65" />
                <group name="Object_66" />
              </group>
            </group>
            <group name="Object_67" scale={0}>
              <group name="frame_36">
                <group name="Object_69" />
                <group name="Object_70" />
                <group name="Object_71" />
              </group>
            </group>
            <group name="Object_7" scale={0}>
              <group name="frame_48">
                <group name="Object_10" />
                <group name="Object_11" />
                <group name="Object_9" />
              </group>
            </group>
            <group name="Object_72" scale={0}>
              <group name="frame_35">
                <group name="Object_74" />
                <group name="Object_75" />
                <group name="Object_76" />
              </group>
            </group>
            <group name="Object_77" scale={0}>
              <group name="frame_34">
                <group name="Object_79" />
                <group name="Object_80" />
                <group name="Object_81" />
              </group>
            </group>
            <group name="Object_82" scale={0}>
              <group name="frame_33">
                <group name="Object_84" />
                <group name="Object_85" />
                <group name="Object_86" />
              </group>
            </group>
            <group name="Object_87" scale={0}>
              <group name="frame_32">
                <group name="Object_89" />
                <group name="Object_90" />
                <group name="Object_91" />
              </group>
            </group>
            <group name="Object_92" scale={0}>
              <group name="frame_31">
                <group name="Object_94" />
                <group name="Object_95" />
                <group name="Object_96" />
              </group>
            </group>
            <group name="Object_97" scale={0}>
              <group name="frame_30">
                <group name="Object_100" />
                <group name="Object_101" />
                <group name="Object_99" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/NewGlobe.glb");
export default NewGlobe;